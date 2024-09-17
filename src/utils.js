export const convertDate = (date) => {
        
    const dateObject = new Date(date)

    const formattedDate = dateObject.toLocaleString('en-GB', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    })

    return formattedDate.replace(',', ', at')
}