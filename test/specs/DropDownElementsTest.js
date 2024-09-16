import DropDownElementsPage from '../pageobjects/DropDownElementsPage.js'; // Ensure the path and extension are correct
import { expect as expectChai } from 'chai';

describe('Dynamic Control functionality', () => {
    it('the buttons should behave dynamically', async () => {
        await DropDownElementsPage.open();
        await DropDownElementsPage.selectDropDownElements();
    });
});

