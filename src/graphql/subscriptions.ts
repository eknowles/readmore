// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateBook = `subscription OnCreateBook {
  onCreateBook {
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
export const onUpdateBook = `subscription OnUpdateBook {
  onUpdateBook {
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
export const onDeleteBook = `subscription OnDeleteBook {
  onDeleteBook {
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
export const onCreateLoan = `subscription OnCreateLoan {
  onCreateLoan {
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
export const onUpdateLoan = `subscription OnUpdateLoan($owner: String!) {
  onUpdateLoan(owner: $owner) {
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
export const onDeleteLoan = `subscription OnDeleteLoan($owner: String!) {
  onDeleteLoan(owner: $owner) {
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
export const onCreateProfile = `subscription OnCreateProfile {
  onCreateProfile {
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
export const onUpdateProfile = `subscription OnUpdateProfile($owner: String!) {
  onUpdateProfile(owner: $owner) {
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
export const onDeleteProfile = `subscription OnDeleteProfile {
  onDeleteProfile {
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
