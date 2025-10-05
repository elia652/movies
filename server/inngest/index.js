import { Inngest } from 'inngest';
import User from '../models/User.js';
import { connectDb } from '../lib/db.js';

// Create a client to send and receive events
export const inngest = new Inngest({ id: 'movie-ticket-booking' });

const syncUserCreation = inngest.createFunction(
  { id: 'sync-user-from-clerk' },
  { event: 'clerk/user.created' },
  async ({ event }) => {
    await connectDb();

    // Clerk payload uses snake_case
    const { id, first_name, last_name, email_addresses, image_url } =
      event.data;

    const userData = {
      _id: id,
      email: email_addresses?.[0]?.email_address || '',
      name: `${first_name ?? ''} ${last_name ?? ''}`.trim(),
      image: image_url,
    };

    await User.create(userData);
    return { ok: true };
  }
);

const syncUserDeletion = inngest.createFunction(
  { id: 'delete-user-with-clerk' },
  { event: 'clerk/user.deleted' },
  async ({ event }) => {
    await connectDb();

    const { id } = event.data;
    await User.findByIdAndDelete(id);

    return { ok: true };
  }
);

const syncUserUpdation = inngest.createFunction(
  { id: 'update-user-from-clerk' },
  { event: 'clerk/user.updated' },
  async ({ event }) => {
    await connectDb();

    const { id, first_name, last_name, email_addresses, image_url } =
      event.data;

    const update = {
      email: email_addresses?.[0]?.email_address || '',
      name: `${first_name ?? ''} ${last_name ?? ''}`.trim(),
      image: image_url,
    };

    await User.findByIdAndUpdate(id, update, { new: true });
    return { ok: true };
  }
);

export const functions = [syncUserCreation, syncUserUpdation, syncUserDeletion];
