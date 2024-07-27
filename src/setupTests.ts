/* eslint-disable object-shorthand */
/* eslint-disable func-names */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { mockIonicReact } from '@ionic/react-test-utils';

mockIonicReact();

// Mock matchmedia
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

// https://github.com/aws-amplify/amplify-ui/issues/1647
if (typeof window.URL.createObjectURL === 'undefined') {
  window.URL.createObjectURL = jest.fn();
}
