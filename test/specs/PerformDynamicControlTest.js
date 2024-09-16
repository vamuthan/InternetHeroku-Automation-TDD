import DynamicControlPage from '../pageobjects/DynamicControlPage.js'
import { expect as expectChai } from 'chai';

describe('Dynamic Control functionality', () => {
    it('the buttons should behave dynamically', async () => {
        await DynamicControlPage.open();
        const {resultForCheckBox, resultForInputField} = await DynamicControlPage.performDynamicControlFeatures();
        expectChai(resultForCheckBox).to.equals(resultForInputField);
    })
}) 