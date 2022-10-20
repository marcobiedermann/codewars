type Login = [string, string];

function searchNames(logins: Login[]): Login[] {
  return logins.filter((login) => {
    const [name] = login;

    return name.endsWith('_');
  });
}

export default searchNames;
