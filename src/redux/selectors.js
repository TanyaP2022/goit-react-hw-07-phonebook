export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter.filter;

export const selectState = ({ contacts }) => ({
  isLoading: contacts.isLoading,
  error: contacts.error,
});
