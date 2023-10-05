
const postService = require('../services/post.services');


exports.findAll = async (req, res) => {

    console.log("Find all posts");

    try {

        const result = await postService.findAll();
        res.status(200).json({status: true, data: result})
        console.log("Success in saving post");
        
    } catch (err) {
        res.status(400).json({status: false, data: err})
        console.log("Problem in finding all posts");
    }
}

exports.findOne =async (req, res) => {
    
    const id = req.params.id;
    console.log("Find post with id ", id)

    try {

        const result = await postService.findOne(id);
        res.status(200).json({status: true, data: result})
        console.log("Success in finding post");
        
    } catch (err) {
        res.status(400).json({status: false, data: err})
        console.log("Problem in finding post");
    }
}



exports.create = async (req, res) => {

    const data = req.body;
    console.log("Insert post ", data.title);

    try {

        const result = await postService.create(data);
        res.status(200).json({status: true, data: result})
        console.log("Success in saving post");
        
    } catch (err) {
        res.status(400).json({status: false, data: err})
        console.log("Problem in saving post");
    }
}

exports.updatePost = async (req, res) => {

    const id =req.params.id;
    console.log("Update a post with id ", id)

    try {

        const result = await postService.updatePost(req.body);
        res.status(200).json({status: true, data: result})
        console.log("Success in updating post");
        
    } catch (err) {
        res.status(400).json({status: false, data: err})
        console.log("Problem in updating post");
    }
}

exports.updateCategory = async (req, res) => {

    const id = req.params.id
    console.log("Update category")

    try {

        const result = await postService.updateCategory(req.body);
        res.status(200).json({status: true, data: result})
        console.log("Success in updating category");
        
    } catch (err) {
        res.status(400).json({status: false, data: err})
        console.log("Problem in updating category");
    }
}

exports.deletePost = async (req, res) => {

    const id =req.params.id;
    console.log("Delete a post with id ", id)

    try {

        const result = await postService.deletePost(req.body);
        res.status(200).json({status: true, data: result})
        console.log("Success in deleting post");
        
    } catch (err) {
        res.status(400).json({status: false, data: err})
        console.log("Problem in deleting post");
    }
}

exports.deleteCategories = async (req, res) => {

    const id =req.params.id;
    console.log("Remove categories")

    try {

        const result = await postService.deleteCategories(req.body);
        res.status(200).json({status: true, data: result})
        console.log("Success in removing categories");
        
    } catch (err) {
        res.status(400).json({status: false, data: err})
        console.log("Problem with removing categories");
    }
}


