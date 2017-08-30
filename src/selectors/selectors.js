export const categoriesFormattedForDropdown = categories => {
    if (!categories) {
        return;
    }

    return categories.map(category => {
        return {
            value: category.path,
            text: `${category.name}`
        };
    });
};
