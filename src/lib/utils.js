 export function formatDate(date, dateStyle) {
    const formatter = new Intl.DateTimeFormat('en-US', { dateStyle });
    return formatter.format(new Date(date));
}