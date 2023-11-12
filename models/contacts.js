import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("models", "contacts.json");

const rewriteContacts = (contacts) =>
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

const listContacts = async () => {
  const contactList = await fs.readFile(contactsPath);
  return JSON.parse(contactList);
};

const getById = async (contactId) => {
  const contacts = await listContacts();
  const oneContact = contacts.find((contact) => contact.id === contactId);
  return oneContact || null;
};

const addContact = async (body) => {
  const { name, email, phone } = body;

  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };

  const contacts = await listContacts();

  contacts.push(newContact);
  await rewriteContacts(contacts);

  return newContact;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();

  const idx = contacts.findIndex((contact) => contact.id === contactId);
  if (idx === -1) {
    return null;
  }

  const [removedContact] = contacts.splice(idx, 1);
  await rewriteContacts(contacts);

  return removedContact;
};

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();

  const idx = contacts.findIndex((contact) => contact.id === contactId);
  if (idx === -1) {
    return null;
  }

  contacts[idx] = { ...contacts[idx], ...body };
  await rewriteContacts(contacts);

  return contacts[idx];
};

export default {
  listContacts,
  getById,
  removeContact,
  addContact,
  updateContact,
};
