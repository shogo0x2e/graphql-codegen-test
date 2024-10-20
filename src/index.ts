import { graphql } from './graphql'
import { execute } from './graphql/execute'

const PeopleCountQuery = graphql(`
  query PeopleCount{
    allPeople {
      totalCount
    }
  }
`)

execute(PeopleCountQuery).then(data => {
  console.log(data.allPeople?.totalCount)
})
