const filtered = async (req: { query: any }, data: any[]): Promise<any> => {
  if (data.length > 0) {
    const filters = req.query
    const filteredItems = data.filter(filter => {
      let isValid = true
      for (const key in filters) {
        isValid = isValid && filter[key] === filters[key]
      }
      return isValid
    })
    return filteredItems
  }
}

const filteredASC = async (req: { query: { order: any } }, data: any[]): Promise<any> => {
  let filteredItems
  const filters = req.query.order
  if (filters === 'ASC') {
    for (const key in filters) {
      const sortData = data.sort((a, b) => (a[key] > b[key]) ? -1 : 1)
      filteredItems = sortData
    }
  }
  return filteredItems
}

const filteredDESC = async (req: { query: { order: any } }, data: any[]): Promise<any> => {
  let filteredItemsDESC
  const filters = req.query.order
  if (filters === 'DESC') {
    const sortData = data.reverse()
    filteredItemsDESC = sortData
  }
  return filteredItemsDESC
}

export { filtered, filteredASC, filteredDESC }
