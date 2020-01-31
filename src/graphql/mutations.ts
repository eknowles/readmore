// tslint:disable
// this is an auto generated file. This will be overwritten

export const createBook = `mutation CreateBook(
  $input: CreateBookInput!
  $condition: ModelBookConditionInput
) {
  createBook(input: $input, condition: $condition) {
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
export const updateBook = `mutation UpdateBook(
  $input: UpdateBookInput!
  $condition: ModelBookConditionInput
) {
  updateBook(input: $input, condition: $condition) {
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
export const deleteBook = `mutation DeleteBook(
  $input: DeleteBookInput!
  $condition: ModelBookConditionInput
) {
  deleteBook(input: $input, condition: $condition) {
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
export const createLoan = `mutation CreateLoan(
  $input: CreateLoanInput!
  $condition: ModelLoanConditionInput
) {
  createLoan(input: $input, condition: $condition) {
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
export const updateLoan = `mutation UpdateLoan(
  $input: UpdateLoanInput!
  $condition: ModelLoanConditionInput
) {
  updateLoan(input: $input, condition: $condition) {
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
export const deleteLoan = `mutation DeleteLoan(
  $input: DeleteLoanInput!
  $condition: ModelLoanConditionInput
) {
  deleteLoan(input: $input, condition: $condition) {
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
export const createProfile = `mutation CreateProfile(
  $input: CreateProfileInput!
  $condition: ModelProfileConditionInput
) {
  createProfile(input: $input, condition: $condition) {
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
export const updateProfile = `mutation UpdateProfile(
  $input: UpdateProfileInput!
  $condition: ModelProfileConditionInput
) {
  updateProfile(input: $input, condition: $condition) {
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
export const deleteProfile = `mutation DeleteProfile(
  $input: DeleteProfileInput!
  $condition: ModelProfileConditionInput
) {
  deleteProfile(input: $input, condition: $condition) {
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
