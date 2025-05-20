# SCORM Template

Build SCORM packages with React.

### Getting Started

```shell
npm install
npm start
```

### Export SCORM Package

```shell
npm install
npm run package
```

Packages will be output as a zip file to the `packages` directory, using the `version` field
inside the [package.json](package.json) file

### Translations

This process is entirely automated and involves limited developer involvement. The developer only needs to export and import CSV files via automated scripts outlined below.

#### Export

Export translations CSV file for a translator to populate the `translated` column:

```shell
npm run export-translations
```

This will output a file at `storage/translations.csv`. Only the `translated` column should be edited by the translator.

#### Import

Copy the translation.csv file to `storage/translations.csv`, then run:

```shell
npm run import-translations fr
```

This will import the `translated` column content and add the language as a key to `src/config/content.ts`.
