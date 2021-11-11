import {mails} from '../data/mails.js'
import {user} from '../data/user.js'
import { storageService } from '../../../services/async-storage-service.js'
import { utilService } from '../../../services/utils-service.js'

const MAILS_KEY = 'mails'
const USER_KEY = 'user'
_createMails()

export const mailService = {
 query,
 getById,
 removeMail,
 put
}


function query(){
  return storageService.query(MAILS_KEY)
}

function _createMails(){
  let newMails = utilService.loadFromStorage(MAILS_KEY)
  if(!newMails || !newMails.length){
    newMails = mails
    utilService.saveToStorage(MAILS_KEY,newMails)
  }
  return newMails
}

function getById(mailId){
 return storageService.get(MAILS_KEY,mailId)
}

function put(mail){
  return storageService.put(MAILS_KEY,mail)
}

function removeMail(mail){
  console.log(mail)
  if(mail.status !== 'trash'){
    console.log('first')
     mail.status = 'trash'
    return  storageService.put(MAILS_KEY,mail)
  } 
  console.log('second')
 return storageService.remove(MAILS_KEY,mail.id)
}