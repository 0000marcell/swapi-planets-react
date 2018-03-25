#!bin/bash
# $1 name of the file $2 name of the component

if [[ -z "$1" ]]; then
  echo "you need to pass the name of the component"
  exit 0
fi

mkdir "./src/components/$1"  

echo -e "import React, { Component} from 'react'; \
\n\nclass $1 extends Component { \
\n\n} \
\n\n
\nexport default $1;" > "./src/components/$1/$1.js"

touch "./src/components/$1/$1.css"

echo -e "import React from 'react'; \
\nimport ReactDOM from 'react-dom'; \
\nimport $1 from '$1'; \
\n\nit('renders without crashing', () => { \
\n\tconst div = document.createElement('div'); \
\n\tReactDOM.render(<$1 />, div); \
\n});" > "./src/components/$1/$1.test.js";

echo "$1 component created!"
