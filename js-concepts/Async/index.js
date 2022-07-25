console.log('Script loaded')

// callback hell
/*
function getRecipie() {
  setTimeout(function() {

    const recipieId = [1,2,3,4,5]
    console.log(recipieId)

    setTimeout(function(id) {
      const recipie = {
        title: 'Pasta'
      }
      console.log(`${id} ${recipie.title}`)

      setTimeout(function() {
        const recipie2 = {
          title: 'Maggie',
          cook: 'Aditya'
        }
        console.log(recipie2.cook)
      }, 1500, recipie.cook)

    }, 1500, recipieId[3])

  }, 1500)
}
*/

// getRecipie()

/*
  execution stack -> every function when called gets pushed
  web apis -> every async fuction with its callback first gets into  gets into
              execution stack and from there it gets into web apis
  message queue -> when async function's timer is up then it gets into
  message queue -> execution stack -> when execution gets empty then
  serially the callbacks are put onto execution stack snd executed
*/


//////////////////////////////////////////////////
// PROMISES

const getIds = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([1,2,3,4,5])
    reject([1,2,3,4,5])
  }, 1500)
})

const getRecipie = recID => {
  return new Promise((resolve, reject) => {
    setTimeout(ID => {
      const recipie2 = {
        title: 'Maggie',
        cook: 'Aditya'
      }
      resolve(recipie2)
    }, 1500, recID)
  })
}

const getRelated = cook => {
  return new Promise((resolve, reject) => {
    setTimeout(cook => {
      resolve(cook)
    }, 1500, cook)
  })
}

/*
getIds
.then(IDs => {
  console.log(IDs)
  return getRecipie(IDs[2])
})
.then(recipie => {
  console.log(recipie)
  return getRelated(recipie.cook)
})
.then(cook => {
  console.log(cook)
})
.catch(error => {
  console.log(error)
})
*/

////////////////////////////////////////////////////////
// ASYNC AWAIT

async function getRecipieAW() {
  // await directly executes resolve()
  // and stops the code from executing forward
  // async function keeps on running in background
  const IDs = await getIds
  console.log(IDs)
  const recipie = await getRecipie(IDs[2])
  console.log(recipie)
  const related = await getRelated('Aditya')
  console.log(related)
  return IDs
}
/*
  If anything is returned from the async function
  to a variable or a promise then in the run it would simply return
  a promise (pending) as it is not yet resolved but to
  get it working use .then()

  variable is also accessed using .then()
*/
const a = getRecipieAW()
a.then(data => {
  console.log(data)
})

console.log('At end')