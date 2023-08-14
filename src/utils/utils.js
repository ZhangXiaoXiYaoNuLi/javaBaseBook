export const turnItems = (items) => {
    let resItems = []

    items.forEach((i, index) => {
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