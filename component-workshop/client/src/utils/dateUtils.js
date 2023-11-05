export const formatDate = (isoDate) =>
    new Date(isoDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
