import Page from './page.js'; 
// cosnst Page = require('./page.js')--> we are using common js framework.
import { $ } from '@wdio/globals'

class DropDownElementsPage extends Page {

    get dropDownPageLink(){
        return $ ('div[id="content"] > ul > li:nth-child(11)')
    }

    get dropDownCaret(){
        return $ ('#dropdown')
    } 

    get dropDownOptionOne(){
        return $ ('#dropdown > option:nth-child(2)')
    }

    get dropDownOptionTwo(){
        return $ ('#dropdown > option:nth-child(3)')
    }

    async selectDropDownElements(){
        await browser.pause(3000);

        await (await this.dropDownCaret).click();

        await browser.pause(3000); 

        await (await this.dropDownOptionOne).click();

        await browser.pause(3000);
        
        await (await this.dropDownOptionTwo).click();

    }
    open() {
        return super.open('dropdown')
    }
}

export default new DropDownElementsPage() 
//module.export = new DropDownElementsPage()--> we are using common js framework.
