
const CategoryEntity = require('../model/Category').CategoryEntity;
const dataSource = require('../connect').dataSource;

function update(data) {
    const result = dataSource
    .getRepository(CategoryEntity)
    .createQueryBuilder()
    .update(CategoryEntity)
    .set({name: data.name})
    .where("id = :id", {id :data.id})
    .execute()
    .catch(error => console.log(error))

    return result;
}

function findOne(id) {
    const result = dataSource
    .getRepository(CategoryEntity)
    .createQueryBuilder()
    .select('ct')
    .from(CategoryEntity, 'ct')
    .where('ct.id = :id', {id : id})
    .getOne()

    return result;
}

function findAll() {
    const result = dataSource
    .getRepository(CategoryEntity)
    .createQueryBuilder()
    .select('category')
    .from(CategoryEntity, 'category')
    .getMany()

    return result;
}

function create(name) {
    console.log("Service Category create", name);

    const result = dataSource
    .getRepository(CategoryEntity)
    .createQueryBuilder()
    .insert()
    .into(CategoryEntity)
    .values([
        {name: name}
    ])
    .execute()
    .catch(error => console.log(error));
    
    return result;
}

function deleteCategory(id) {
    
    const result = dataSource
    .getRepository(CategoryEntity)
    .createQueryBuilder()
    .delete()
    .from(CategoryEntity)
    .where("id = :id", {id : id})
    .execute()
    .catch(error => console.log(error))

    return result;
}


module.exports = { findAll, create, findOne, update, deleteCategory };