
export const CATEGORIES = {
    ABOUT_ME: 5,
    EDUCATION: 7,
    JOB_EXPERIENCE: 4,
    LANGUAGE: 8,
    MY_EXPERTISE: 6,
    PROJECT: 9,
    TRAINING: 10,
    UNCATEGORIZED: 1
}

export const computePostsByCategory = (posts) => {

    const retObj = {}

    posts && posts.forEach(post => {
        const { categories } = post;

        for (let category in CATEGORIES) {
            let category_id = CATEGORIES[category];
            if (categories.includes(category_id)) {
                if (retObj[category_id]) {
                    retObj[category_id].push(post)
                } else {
                    retObj[category_id] = [post]
                }
            }
        }
    });

    return retObj;
}
