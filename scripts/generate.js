const fs = require('fs-extra');
const path = require('path');
const rimraf = require('rimraf');
const converter = require('number-to-words');
const iconsDefinition = require('@esri/calcite-ui-icons/docs/icons.json');

const jsonPath = path.resolve(__dirname, '../src/data/icons.json');
const appPath = path.resolve(__dirname, '../src/components/IconList/icons.js');

let importString = `// #GENERATED ICON IMPORTS#
`;
let templateString = `// #GENERATED ICON COMPS#
`;

const icons = {
  nameData: []
};

// calcite-ui-icons exports a JSON structure of their icons.
// Iterate over that structure and craft React components for each icon.
Object.keys(iconsDefinition.icons).forEach(key => {
  const iconDef = iconsDefinition.icons[key];

  // Make a component name from the icon name
  iconDef.name =
    key
      .split(/-/g)
      .map(part => {
        return part.charAt(0).toUpperCase() + part.slice(1);
      })
      .join('') + 'Icon';

  const startsWithNumber = iconDef.name.match(/(\d*)(.*)/);

  if (startsWithNumber[1]) {
    iconDef.name = `${numberToWords(
      startsWithNumber[1]
    )}${capitalizeFirstLetter(startsWithNumber[2])}`;
  }

  // add filename to def
  iconDef.fileName = `import ${iconDef.name} from "calcite-ui-icons-react/${iconDef.name}";`;

  // build new icon name def and add origname to def
  const iconNameDef = {
    name: iconDef.name,
    importString: iconDef.fileName,
    origName: key
  };

  // add def to data array
  icons.nameData.push(iconNameDef);

  // create and concat import statement with new line
  importString += `${iconNameDef.importString}
`;

  // create & concat icon component template
  templateString += `
      <Icon
        name='${iconNameDef.name}'
        key='${iconNameDef.name}'
        import='${iconNameDef.importString}'
      >
        <IconContext.Consumer>
          {iconProps => (
            <${iconNameDef.name} size={iconProps.size} color={iconProps.color} />
          )}
        </IconContext.Consumer>
      </Icon>,
    `;
});

// create json file
fs.writeJson(jsonPath, icons, err => {
  if (err) return console.error(err);
  console.log('successfully generated icon data json!');
});

// rewrite App.js with new import string
importString += `// #GENERATED ICON IMPORTS END#`;
templateString += `// #GENERATED ICON COMPS END#`;

fs.readFile(appPath, 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }

  // inject the import statements
  let result = data.replace(
    /\/\/ #GENERATED ICON IMPORTS#([^]+)\/\/ #GENERATED ICON IMPORTS END#/g,
    importString
  );

  // inject the component templates
  result = result.replace(
    /\/\/ #GENERATED ICON COMPS#([^]+)\/\/ #GENERATED ICON COMPS END#/g,
    templateString
  );

  fs.writeFile(appPath, result, 'utf8', function(err) {
    if (err) return console.log(err);
    console.log('successfully injected icon imports & template!');
  });
});

// Helper functions
function numberToWords(number) {
  const word = capitalizeFirstLetter(converter.toWords(number))
    .replace(/ /g, '-')
    .replace(/,/g, '-')
    .split('-')
    .map(s => capitalizeFirstLetter(s))
    .join('');

  return word;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
