/**
 * @README
 * Issue with TS in Contact.tsx component.
 * Solution: https://stackoverflow.com/questions/67053345/could-not-find-a-declaration-file-for-module-react-jsx-runtime
 */

declare module 'react/jsx-runtime' {
  export default any;
}
