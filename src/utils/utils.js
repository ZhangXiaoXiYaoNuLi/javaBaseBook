export const turnItems = (items) => {
    let resItems = []

    items.forEach((i, index) => {
        if (i.hidden === true) {
            return
        }
        resItems.push({
            key: `${index}`,
            label: i.title,
            children: i.component,
        })
    })
    return resItems
}

export default {
    turnItems,
}