/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateBookInput = {
  id?: string | null,
  author: string,
  title: string,
  about?: string | null,
  thumbnailUrl?: string | null,
  bookOwnerId: string,
};

export type ModelBookConditionInput = {
  author?: ModelStringInput | null,
  title?: ModelStringInput | null,
  about?: ModelStringInput | null,
  thumbnailUrl?: ModelStringInput | null,
  and?: Array< ModelBookConditionInput | null > | null,
  or?: Array< ModelBookConditionInput | null > | null,
  not?: ModelBookConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateBookInput = {
  id: string,
  author?: string | null,
  title?: string | null,
  about?: string | null,
  thumbnailUrl?: string | null,
  bookOwnerId?: string | null,
};

export type DeleteBookInput = {
  id?: string | null,
};

export type CreateLoanInput = {
  id?: string | null,
  start: string,
  end?: string | null,
  loanBookId: string,
  loanBorrowerId: string,
};

export type ModelLoanConditionInput = {
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  and?: Array< ModelLoanConditionInput | null > | null,
  or?: Array< ModelLoanConditionInput | null > | null,
  not?: ModelLoanConditionInput | null,
};

export type UpdateLoanInput = {
  id: string,
  start?: string | null,
  end?: string | null,
  loanBookId?: string | null,
  loanBorrowerId?: string | null,
};

export type DeleteLoanInput = {
  id?: string | null,
};

export type CreateProfileInput = {
  id?: string | null,
  displayName: string,
  picture: string,
};

export type ModelProfileConditionInput = {
  displayName?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
};

export type UpdateProfileInput = {
  id: string,
  displayName?: string | null,
  picture?: string | null,
};

export type DeleteProfileInput = {
  id?: string | null,
};

export type ModelBookFilterInput = {
  id?: ModelIDInput | null,
  author?: ModelStringInput | null,
  title?: ModelStringInput | null,
  about?: ModelStringInput | null,
  thumbnailUrl?: ModelStringInput | null,
  and?: Array< ModelBookFilterInput | null > | null,
  or?: Array< ModelBookFilterInput | null > | null,
  not?: ModelBookFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelLoanFilterInput = {
  id?: ModelIDInput | null,
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  and?: Array< ModelLoanFilterInput | null > | null,
  or?: Array< ModelLoanFilterInput | null > | null,
  not?: ModelLoanFilterInput | null,
};

export type ModelProfileFilterInput = {
  id?: ModelIDInput | null,
  displayName?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
};

export type SearchableBookFilterInput = {
  id?: SearchableIDFilterInput | null,
  author?: SearchableStringFilterInput | null,
  title?: SearchableStringFilterInput | null,
  about?: SearchableStringFilterInput | null,
  thumbnailUrl?: SearchableStringFilterInput | null,
  and?: Array< SearchableBookFilterInput | null > | null,
  or?: Array< SearchableBookFilterInput | null > | null,
  not?: SearchableBookFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchableBookSortInput = {
  field?: SearchableBookSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableBookSortableFields {
  id = "id",
  author = "author",
  title = "title",
  about = "about",
  thumbnailUrl = "thumbnailUrl",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type CreateBookMutationVariables = {
  input: CreateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type CreateBookMutation = {
  createBook:  {
    __typename: "Book",
    id: string,
    author: string,
    title: string,
    about: string | null,
    thumbnailUrl: string | null,
    loans:  {
      __typename: "ModelLoanConnection",
      items:  Array< {
        __typename: "Loan",
        id: string,
        start: string,
        end: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner:  {
      __typename: "Profile",
      id: string,
      displayName: string,
      picture: string,
      loans:  {
        __typename: "ModelLoanConnection",
        nextToken: string | null,
      } | null,
      books:  {
        __typename: "ModelBookConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
  } | null,
};

export type UpdateBookMutationVariables = {
  input: UpdateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type UpdateBookMutation = {
  updateBook:  {
    __typename: "Book",
    id: string,
    author: string,
    title: string,
    about: string | null,
    thumbnailUrl: string | null,
    loans:  {
      __typename: "ModelLoanConnection",
      items:  Array< {
        __typename: "Loan",
        id: string,
        start: string,
        end: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner:  {
      __typename: "Profile",
      id: string,
      displayName: string,
      picture: string,
      loans:  {
        __typename: "ModelLoanConnection",
        nextToken: string | null,
      } | null,
      books:  {
        __typename: "ModelBookConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
  } | null,
};

export type DeleteBookMutationVariables = {
  input: DeleteBookInput,
  condition?: ModelBookConditionInput | null,
};

export type DeleteBookMutation = {
  deleteBook:  {
    __typename: "Book",
    id: string,
    author: string,
    title: string,
    about: string | null,
    thumbnailUrl: string | null,
    loans:  {
      __typename: "ModelLoanConnection",
      items:  Array< {
        __typename: "Loan",
        id: string,
        start: string,
        end: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner:  {
      __typename: "Profile",
      id: string,
      displayName: string,
      picture: string,
      loans:  {
        __typename: "ModelLoanConnection",
        nextToken: string | null,
      } | null,
      books:  {
        __typename: "ModelBookConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
  } | null,
};

export type CreateLoanMutationVariables = {
  input: CreateLoanInput,
  condition?: ModelLoanConditionInput | null,
};

export type CreateLoanMutation = {
  createLoan:  {
    __typename: "Loan",
    id: string,
    book:  {
      __typename: "Book",
      id: string,
      author: string,
      title: string,
      about: string | null,
      thumbnailUrl: string | null,
      loans:  {
        __typename: "ModelLoanConnection",
        nextToken: string | null,
      } | null,
      owner:  {
        __typename: "Profile",
        id: string,
        displayName: string,
        picture: string,
        owner: string | null,
      },
    },
    borrower:  {
      __typename: "Profile",
      id: string,
      displayName: string,
      picture: string,
      loans:  {
        __typename: "ModelLoanConnection",
        nextToken: string | null,
      } | null,
      books:  {
        __typename: "ModelBookConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
    start: string,
    end: string | null,
    owner: string | null,
  } | null,
};

export type UpdateLoanMutationVariables = {
  input: UpdateLoanInput,
  condition?: ModelLoanConditionInput | null,
};

export type UpdateLoanMutation = {
  updateLoan:  {
    __typename: "Loan",
    id: string,
    book:  {
      __typename: "Book",
      id: string,
      author: string,
      title: string,
      about: string | null,
      thumbnailUrl: string | null,
      loans:  {
        __typename: "ModelLoanConnection",
        nextToken: string | null,
      } | null,
      owner:  {
        __typename: "Profile",
        id: string,
        displayName: string,
        picture: string,
        owner: string | null,
      },
    },
    borrower:  {
      __typename: "Profile",
      id: string,
      displayName: string,
      picture: string,
      loans:  {
        __typename: "ModelLoanConnection",
        nextToken: string | null,
      } | null,
      books:  {
        __typename: "ModelBookConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
    start: string,
    end: string | null,
    owner: string | null,
  } | null,
};

export type DeleteLoanMutationVariables = {
  input: DeleteLoanInput,
  condition?: ModelLoanConditionInput | null,
};

export type DeleteLoanMutation = {
  deleteLoan:  {
    __typename: "Loan",
    id: string,
    book:  {
      __typename: "Book",
      id: string,
      author: string,
      title: string,
      about: string | null,
      thumbnailUrl: string | null,
      loans:  {
        __typename: "ModelLoanConnection",
        nextToken: string | null,
      } | null,
      owner:  {
        __typename: "Profile",
        id: string,
        displayName: string,
        picture: string,
        owner: string | null,
      },
    },
    borrower:  {
      __typename: "Profile",
      id: string,
      displayName: string,
      picture: string,
      loans:  {
        __typename: "ModelLoanConnection",
        nextToken: string | null,
      } | null,
      books:  {
        __typename: "ModelBookConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
    start: string,
    end: string | null,
    owner: string | null,
  } | null,
};

export type CreateProfileMutationVariables = {
  input: CreateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type CreateProfileMutation = {
  createProfile:  {
    __typename: "Profile",
    id: string,
    displayName: string,
    picture: string,
    loans:  {
      __typename: "ModelLoanConnection",
      items:  Array< {
        __typename: "Loan",
        id: string,
        start: string,
        end: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    books:  {
      __typename: "ModelBookConnection",
      items:  Array< {
        __typename: "Book",
        id: string,
        author: string,
        title: string,
        about: string | null,
        thumbnailUrl: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type UpdateProfileMutationVariables = {
  input: UpdateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type UpdateProfileMutation = {
  updateProfile:  {
    __typename: "Profile",
    id: string,
    displayName: string,
    picture: string,
    loans:  {
      __typename: "ModelLoanConnection",
      items:  Array< {
        __typename: "Loan",
        id: string,
        start: string,
        end: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    books:  {
      __typename: "ModelBookConnection",
      items:  Array< {
        __typename: "Book",
        id: string,
        author: string,
        title: string,
        about: string | null,
        thumbnailUrl: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type DeleteProfileMutationVariables = {
  input: DeleteProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type DeleteProfileMutation = {
  deleteProfile:  {
    __typename: "Profile",
    id: string,
    displayName: string,
    picture: string,
    loans:  {
      __typename: "ModelLoanConnection",
      items:  Array< {
        __typename: "Loan",
        id: string,
        start: string,
        end: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    books:  {
      __typename: "ModelBookConnection",
      items:  Array< {
        __typename: "Book",
        id: string,
        author: string,
        title: string,
        about: string | null,
        thumbnailUrl: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type GetBookQueryVariables = {
  id: string,
};

export type GetBookQuery = {
  getBook:  {
    __typename: "Book",
    id: string,
    author: string,
    title: string,
    about: string | null,
    thumbnailUrl: string | null,
    loans:  {
      __typename: "ModelLoanConnection",
      items:  Array< {
        __typename: "Loan",
        id: string,
        start: string,
        end: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner:  {
      __typename: "Profile",
      id: string,
      displayName: string,
      picture: string,
      loans:  {
        __typename: "ModelLoanConnection",
        nextToken: string | null,
      } | null,
      books:  {
        __typename: "ModelBookConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
  } | null,
};

export type ListBooksQueryVariables = {
  filter?: ModelBookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBooksQuery = {
  listBooks:  {
    __typename: "ModelBookConnection",
    items:  Array< {
      __typename: "Book",
      id: string,
      author: string,
      title: string,
      about: string | null,
      thumbnailUrl: string | null,
      loans:  {
        __typename: "ModelLoanConnection",
        nextToken: string | null,
      } | null,
      owner:  {
        __typename: "Profile",
        id: string,
        displayName: string,
        picture: string,
        owner: string | null,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetLoanQueryVariables = {
  id: string,
};

export type GetLoanQuery = {
  getLoan:  {
    __typename: "Loan",
    id: string,
    book:  {
      __typename: "Book",
      id: string,
      author: string,
      title: string,
      about: string | null,
      thumbnailUrl: string | null,
      loans:  {
        __typename: "ModelLoanConnection",
        nextToken: string | null,
      } | null,
      owner:  {
        __typename: "Profile",
        id: string,
        displayName: string,
        picture: string,
        owner: string | null,
      },
    },
    borrower:  {
      __typename: "Profile",
      id: string,
      displayName: string,
      picture: string,
      loans:  {
        __typename: "ModelLoanConnection",
        nextToken: string | null,
      } | null,
      books:  {
        __typename: "ModelBookConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
    start: string,
    end: string | null,
    owner: string | null,
  } | null,
};

export type ListLoansQueryVariables = {
  filter?: ModelLoanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLoansQuery = {
  listLoans:  {
    __typename: "ModelLoanConnection",
    items:  Array< {
      __typename: "Loan",
      id: string,
      book:  {
        __typename: "Book",
        id: string,
        author: string,
        title: string,
        about: string | null,
        thumbnailUrl: string | null,
      },
      borrower:  {
        __typename: "Profile",
        id: string,
        displayName: string,
        picture: string,
        owner: string | null,
      },
      start: string,
      end: string | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetProfileQueryVariables = {
  id: string,
};

export type GetProfileQuery = {
  getProfile:  {
    __typename: "Profile",
    id: string,
    displayName: string,
    picture: string,
    loans:  {
      __typename: "ModelLoanConnection",
      items:  Array< {
        __typename: "Loan",
        id: string,
        start: string,
        end: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    books:  {
      __typename: "ModelBookConnection",
      items:  Array< {
        __typename: "Book",
        id: string,
        author: string,
        title: string,
        about: string | null,
        thumbnailUrl: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type ListProfilesQueryVariables = {
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfilesQuery = {
  listProfiles:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      id: string,
      displayName: string,
      picture: string,
      loans:  {
        __typename: "ModelLoanConnection",
        nextToken: string | null,
      } | null,
      books:  {
        __typename: "ModelBookConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SearchBooksQueryVariables = {
  filter?: SearchableBookFilterInput | null,
  sort?: SearchableBookSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SearchBooksQuery = {
  searchBooks:  {
    __typename: "SearchableBookConnection",
    items:  Array< {
      __typename: "Book",
      id: string,
      author: string,
      title: string,
      about: string | null,
      thumbnailUrl: string | null,
      loans:  {
        __typename: "ModelLoanConnection",
        nextToken: string | null,
      } | null,
      owner:  {
        __typename: "Profile",
        id: string,
        displayName: string,
        picture: string,
        owner: string | null,
      },
    } | null > | null,
    nextToken: string | null,
    total: number | null,
  } | null,
};

export type OnCreateBookSubscription = {
  onCreateBook:  {
    __typename: "Book",
    id: string,
    author: string,
    title: string,
    about: string | null,
    thumbnailUrl: string | null,
    loans:  {
      __typename: "ModelLoanConnection",
      items:  Array< {
        __typename: "Loan",
        id: string,
        start: string,
        end: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner:  {
      __typename: "Profile",
      id: string,
      displayName: string,
      picture: string,
      loans:  {
        __typename: "ModelLoanConnection",
        nextToken: string | null,
      } | null,
      books:  {
        __typename: "ModelBookConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
  } | null,
};

export type OnUpdateBookSubscription = {
  onUpdateBook:  {
    __typename: "Book",
    id: string,
    author: string,
    title: string,
    about: string | null,
    thumbnailUrl: string | null,
    loans:  {
      __typename: "ModelLoanConnection",
      items:  Array< {
        __typename: "Loan",
        id: string,
        start: string,
        end: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner:  {
      __typename: "Profile",
      id: string,
      displayName: string,
      picture: string,
      loans:  {
        __typename: "ModelLoanConnection",
        nextToken: string | null,
      } | null,
      books:  {
        __typename: "ModelBookConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
  } | null,
};

export type OnDeleteBookSubscription = {
  onDeleteBook:  {
    __typename: "Book",
    id: string,
    author: string,
    title: string,
    about: string | null,
    thumbnailUrl: string | null,
    loans:  {
      __typename: "ModelLoanConnection",
      items:  Array< {
        __typename: "Loan",
        id: string,
        start: string,
        end: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner:  {
      __typename: "Profile",
      id: string,
      displayName: string,
      picture: string,
      loans:  {
        __typename: "ModelLoanConnection",
        nextToken: string | null,
      } | null,
      books:  {
        __typename: "ModelBookConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
  } | null,
};

export type OnCreateLoanSubscription = {
  onCreateLoan:  {
    __typename: "Loan",
    id: string,
    book:  {
      __typename: "Book",
      id: string,
      author: string,
      title: string,
      about: string | null,
      thumbnailUrl: string | null,
      loans:  {
        __typename: "ModelLoanConnection",
        nextToken: string | null,
      } | null,
      owner:  {
        __typename: "Profile",
        id: string,
        displayName: string,
        picture: string,
        owner: string | null,
      },
    },
    borrower:  {
      __typename: "Profile",
      id: string,
      displayName: string,
      picture: string,
      loans:  {
        __typename: "ModelLoanConnection",
        nextToken: string | null,
      } | null,
      books:  {
        __typename: "ModelBookConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
    start: string,
    end: string | null,
    owner: string | null,
  } | null,
};

export type OnUpdateLoanSubscriptionVariables = {
  owner: string,
};

export type OnUpdateLoanSubscription = {
  onUpdateLoan:  {
    __typename: "Loan",
    id: string,
    book:  {
      __typename: "Book",
      id: string,
      author: string,
      title: string,
      about: string | null,
      thumbnailUrl: string | null,
      loans:  {
        __typename: "ModelLoanConnection",
        nextToken: string | null,
      } | null,
      owner:  {
        __typename: "Profile",
        id: string,
        displayName: string,
        picture: string,
        owner: string | null,
      },
    },
    borrower:  {
      __typename: "Profile",
      id: string,
      displayName: string,
      picture: string,
      loans:  {
        __typename: "ModelLoanConnection",
        nextToken: string | null,
      } | null,
      books:  {
        __typename: "ModelBookConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
    start: string,
    end: string | null,
    owner: string | null,
  } | null,
};

export type OnDeleteLoanSubscriptionVariables = {
  owner: string,
};

export type OnDeleteLoanSubscription = {
  onDeleteLoan:  {
    __typename: "Loan",
    id: string,
    book:  {
      __typename: "Book",
      id: string,
      author: string,
      title: string,
      about: string | null,
      thumbnailUrl: string | null,
      loans:  {
        __typename: "ModelLoanConnection",
        nextToken: string | null,
      } | null,
      owner:  {
        __typename: "Profile",
        id: string,
        displayName: string,
        picture: string,
        owner: string | null,
      },
    },
    borrower:  {
      __typename: "Profile",
      id: string,
      displayName: string,
      picture: string,
      loans:  {
        __typename: "ModelLoanConnection",
        nextToken: string | null,
      } | null,
      books:  {
        __typename: "ModelBookConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
    start: string,
    end: string | null,
    owner: string | null,
  } | null,
};

export type OnCreateProfileSubscription = {
  onCreateProfile:  {
    __typename: "Profile",
    id: string,
    displayName: string,
    picture: string,
    loans:  {
      __typename: "ModelLoanConnection",
      items:  Array< {
        __typename: "Loan",
        id: string,
        start: string,
        end: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    books:  {
      __typename: "ModelBookConnection",
      items:  Array< {
        __typename: "Book",
        id: string,
        author: string,
        title: string,
        about: string | null,
        thumbnailUrl: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnUpdateProfileSubscriptionVariables = {
  owner: string,
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile:  {
    __typename: "Profile",
    id: string,
    displayName: string,
    picture: string,
    loans:  {
      __typename: "ModelLoanConnection",
      items:  Array< {
        __typename: "Loan",
        id: string,
        start: string,
        end: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    books:  {
      __typename: "ModelBookConnection",
      items:  Array< {
        __typename: "Book",
        id: string,
        author: string,
        title: string,
        about: string | null,
        thumbnailUrl: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile:  {
    __typename: "Profile",
    id: string,
    displayName: string,
    picture: string,
    loans:  {
      __typename: "ModelLoanConnection",
      items:  Array< {
        __typename: "Loan",
        id: string,
        start: string,
        end: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    books:  {
      __typename: "ModelBookConnection",
      items:  Array< {
        __typename: "Book",
        id: string,
        author: string,
        title: string,
        about: string | null,
        thumbnailUrl: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};
