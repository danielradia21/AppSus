export const storageService = {
  query,
  get,
  post,
  put,
  remove,
  postMany,
  putFirst,
  putAfterPinned,
  sortPinned,
  sortBy

};

function query(entityType) {
  var entities = JSON.parse(localStorage.getItem(entityType)) || [];
  return Promise.resolve(entities);
}

function get(entityType, entityId) {
  return query(entityType).then((entities) =>
  
    entities.find((entity) => entity.id === entityId)
  );
}

function post(entityType, newEntity) {
  newEntity.id = _makeId();
  return query(entityType).then((entities) => {
    entities.push(newEntity);
    _save(entityType, entities);
    return newEntity;
  });
}

function postMany(entityType, newEntities) {
  return query(entityType).then((entities) => {
    entities.push(...newEntities);
    _save(entityType, entities);
    return entities;
  });
}

// understand again !

function putFirst(entityType, updatedEntity) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity.id === updatedEntity.id);
    entities.splice(idx, 1);
    entities.unshift(updatedEntity);
    _save(entityType, entities);
    return entities;
  });
}

//  understand again ! lamrot sheevanti
function putAfterPinned(entityType, updatedEntity) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity.id === updatedEntity.id);
    entities.splice(idx, 1);
    const newIdx = entities.findIndex((entity) => !entity.isPinned);
    entities.splice(newIdx, 0, updatedEntity);
    _save(entityType, entities);
    return updatedEntity;
  });
}

function sortPinned(entityType) {
  return query(entityType).then((entities) => {
    let pinnedEntities = entities.filter((entity) => {
      return entity.isPinned;
    });
    const unpinnedEntities = entities.filter((entity) => {
      return !entity.isPinned;
    });
    pinnedEntities.push(...unpinnedEntities);
    _save(entityType, pinnedEntities);
    return pinnedEntities
  });
  
}


function sortBy(entityType,sortedEntities){

    
 return _save(entityType,sortedEntities)
}

function put(entityType, updatedEntity) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity.id === updatedEntity.id);
    entities.splice(idx, 1, updatedEntity);
    _save(entityType, entities);
    return updatedEntity;
  });
}

function remove(entityType, entityId) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity.id === entityId);
    entities.splice(idx, 1);
    _save(entityType, entities);
  });
}

function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities));
}

function _makeId(length = 5) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
