import { $ } from '@wdio/globals'
import Page from './page.js';

class DynamicControlPage extends Page{

    get buttonOneBeforeChange(){
        return $('form[id="checkbox-example"] > button')
    }
    
    get buttonOneAfterChange(){
        return $('form[id="checkbox-example"] > button')
    }

    get buttonTwoBeforeChange(){
        return $('form[id="input-example"] > button')
    }

    get buttonTwoAfterChange(){
        return $('form[id="input-example"] > button')
    }

    async performDynamicControlFeatures(){
        const buttonOneBeforeText = (await this.buttonOneBeforeChange).getText();
        (await this.buttonOneBeforeChange).click();
        const buttonTwoBeforeText = (await this.buttonTwoBeforeChange).getText();
        (await this.buttonTwoBeforeChange).click();
        await driver.pause(5000);
        const buttonOneAfterText = (await this.buttonOneAfterChange).getText();
        const buttonTwoAfterText = (await this.buttonTwoAfterChange).getText();
        const resultForCheckBox = (buttonOneBeforeText === buttonOneAfterText) ? false : true;
        const resultForInputField = (buttonTwoBeforeText === buttonTwoAfterText) ? false : true;
        return {resultForCheckBox, resultForInputField};
    }

    open () {
        return super.open('dynamic_controls');
    }

}

export default new DynamicControlPage();
