// tslint:disable
// this is an auto generated file. This will be overwritten

export const getBook = `query GetBook($id: ID!) {
  getBook(id: $id) {
    id
    author
    title
    about
    thumbnailUrl
    loans {
      items {
        id
        start
        end
        owner
      }
      nextToken
    }
    owner {
      id
      displayName
      picture
      loans {
        nextToken
      }
      books {
        nextToken
      }
      owner
    }
  }
}
`;
export const listBooks = `query ListBooks(
  $filter: ModelBookFilterInput
  $limit: Int
  $nextToken: String
) {
  listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      author
      title
      about
      thumbnailUrl
      loans {
        nextToken
      }
      owner {
        id
        displayName
        picture
        owner
      }
    }
    nextToken
  }
}
`;
export const getLoan = `query GetLoan($id: ID!) {
  getLoan(id: $id) {
    id
    book {
      id
      author
      title
      about
      thumbnailUrl
      loans {
        nextToken
      }
      owner {
        id
        displayName
        picture
        owner
      }
    }
    borrower {
      id
      displayName
      picture
      loans {
        nextToken
      }
      books {
        nextToken
      }
      owner
    }
    start
    end
    owner
  }
}
`;
export const listLoans = `query ListLoans(
  $filter: ModelLoanFilterInput
  $limit: Int
  $nextToken: String
) {
  listLoans(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      book {
        id
        author
        title
        about
        thumbnailUrl
      }
      borrower {
        id
        displayName
        picture
        owner
      }
      start
      end
      owner
    }
    nextToken
  }
}
`;
export const getProfile = `query GetProfile($id: ID!) {
  getProfile(id: $id) {
    id
    displayName
    picture
    loans {
      items {
        id
        start
        end
        owner
      }
      nextToken
    }
    books {
      items {
        id
        author
        title
        about
        thumbnailUrl
      }
      nextToken
    }
    owner
  }
}
`;
export const listProfiles = `query ListProfiles(
  $filter: ModelProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      displayName
      picture
      loans {
        nextToken
      }
      books {
        nextToken
      }
      owner
    }
    nextToken
  }
}
`;
export const searchBooks = `query SearchBooks(
  $filter: SearchableBookFilterInput
  $sort: SearchableBookSortInput
  $limit: Int
  $nextToken: String
) {
  searchBooks(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      author
      title
      about
      thumbnailUrl
      loans {
        nextToken
      }
      owner {
        id
        displayName
        picture
        owner
      }
    }
    nextToken
    total
  }
}
`;
