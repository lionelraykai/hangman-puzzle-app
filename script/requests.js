const getPuzzle = async (wordCount) => {
  const response = await
 fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
 
  if (response.status === 200) {
  const data = await response.json()
  return data.puzzle
  } else {
  throw new Error('Unable to get puzzle')
  }
 }
 getPuzzle('2').then((puzzle) => {
  console.log(puzzle)
 }).catch((err) => {
  console.log(`Error: ${err}`)
 })

const getCurrentCountry = async () => {
const location = await getlocation()
return getCountry(location.country)
}


const getCountry = async (countryCode) => {
  const response = await fetch('//restcountries.com/v2/all')
  if (response.status === 200) {
    const data = await response.json()
    return data.find((country) => country.alpha2Code === countryCode)
  }else {
    throw new Error('unable to fetch the countries')
  }
  
}
    

const getlocation = async() => {
   const response = await fetch('//ipinfo.io/json?token=2d88ac174081d3')

   if(response.status === 200) {
     return response.json()
   }else {
     throw new Error('unable to fetch the location')
   }
  
}