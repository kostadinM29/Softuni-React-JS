export const formatDate = (isoDate) =>
    new Date(isoDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });

export const formatDateWithWeek = (isoDate) =>
    new Date(isoDate).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });