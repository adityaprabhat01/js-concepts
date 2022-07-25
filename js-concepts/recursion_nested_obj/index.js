console.log('JS loaded')
var f = null
var breadcrum = []
var r = null
let count = 0
const user = {
  // id: 999,
  name: 'home',
  email: 'adityaprabhat1998@gmail.com',
  username: 'Aditya Prabhat',
  files: {
    '1.jpg': "url",
    '2.jpg': "url",
    '4.jpg': "url",
    '3.jpg': "url",
    '5.jpg': "url"
  },
  folders: {
    cats: {
      // id: 0,
      name: 'cats',
      files: {
        'c1.jpg': 'url',
        'c2.jpg': 'url'
      },
      folders: {
        'black': {
          // id: 1,
          name: 'black',
          files: {
            'b1.jpg': 'url',
            'b2.jpg': 'url'
          },
          folders: {
            'north': {
              // id: 2,
              name: 'north',
              files: {},
              folders: {}
            },
            'south': {
              // id: 3,
              name: 'south',
              files: {},
              folders: {}
            }
          }
        },
        'white': {
          // id: 4,
          name: 'white',
          files: {},
          folders: {}
        }
      }
    },
    dogs: {
      // id: 8,
      name: 'dogs',
      files: {
        'd1.jpg': 'url',
        'd2.jpg': 'url'
      },
      folders: {
        love: {
          // id: 5,
          name: 'love',
          files: {
            'm1.jpg': 'url'
          },
          folders: {}
        },
        dangerous: {
          // id: 6,
          name: 'dangerous',
          files: {},
          folders: {}
        }
      }
    }
  }
}

function addId (obj) {
  for (let key in obj) {
    if(typeof(obj[key]) === 'object' &&  obj.name) {
      obj['id'] = count++
      addId(obj[key])
    }
    else if (typeof(obj[key]) === 'object') {
      addId(obj[key])
    }
  }
  return obj
}

// function recursion(obj, parent, id) {
//   for (let key in obj) {
//     if (key == 'id' && obj[key] == id) {
//       f = {
//         name: obj.name,
//         id,
//         // obj
//       }
//       r = obj
//     }
//     if(typeof(obj[key]) === 'object') {
//       recursion(obj[key], parent + '_' + key, id)
//     }
//   }
// }


function recursion(obj, parent, id, name, url) {
  for (let key in obj) {
    if (key == 'id' && obj[key] == id) {
      obj.files[name] = url
      console.log(obj.files[name])
    }
    if(typeof(obj[key]) === 'object') {
      recursion(obj[key], parent + '_' + key, id, name, url)
    }
  }
  return obj
}

// use to display breadcrum and navigate b/w pages
function createBreadcrum (id) {
  recursion(user, 'user', 1)
  breadcrum.push(f)
  recursion(user, 'user', 13)
  breadcrum.push(f)
  recursion(user, 'user', 5)
  breadcrum.push(f)
  recursion(user, 'user', 7)
  breadcrum.push(f)
}

// use in firebase storage path
function createPath () {
  let path = ''
  breadcrum.forEach(element => {
    path = path + '/' + element.name
  })
  return path
}

function gotoLoc (id) {
  recursion(user, 'user', id)
  // r contains the ahead object
  for (let i=0;i<breadcrum.length;i++) {
    if (breadcrum[i].id == id) {
      for (let j=breadcrum.length - 1;j>i;j--){
        breadcrum.pop(breadcrum[j])
      }
      break
    }
  }
}
addId(user)
console.log(user)
// createBreadcrum()
// console.log(breadcrum)
// var path = createPath()
// console.log(path)
// gotoLoc(5)
// console.log(breadcrum)
// console.log(r)
let m = recursion(user, 'user', 13, 'cute.jpg', 'hello.com')
console.log(m)