
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
        const { categories, acf: customFields } = post;

        for (let category in CATEGORIES) {
            let category_id = CATEGORIES[category];
            if (categories.includes(category_id)) {
                if (retObj[category_id]) {
                    retObj[category_id].push(customFields)
                } else {
                    retObj[category_id] = [customFields]
                }
            }
        }
    });

    return retObj;
}

export const getPostCustomFields = (posts, postIndex) => {
    if (!posts || !posts.length) {
        return [];
    }
    const customFields = posts.map(p => p.acf);

    if (postIndex || postIndex === 0) {
        if (customFields.length - 1 >= postIndex) {
            return customFields[postIndex];
        } else {
            return customFields[0];
        }
    }
    return customFields;
}

export const getSinglePostsPerCategory = (postsPerCategory, category) => {
    const posts = postsPerCategory[category]
    const singlePost = posts && posts.length && posts[0];
    return singlePost || {};
}

export const getYearsOfExperience = () => {
    const dt = new Date()
    return dt.getFullYear() - 2011;
}
