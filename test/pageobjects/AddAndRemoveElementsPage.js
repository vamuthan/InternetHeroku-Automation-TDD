import { $ } from '@wdio/globals'
import Page from './page.js';

class AddAndRemoveElementsPage extends Page {
    
    get addAndRemoveElement() {
        return $('div[class="example"] > button')
    }
    
    get deleteButton(){
        return $('button[class="added-manually"]:nth-child(1)')
    }

    open () {
        return super.open('add_remove_elements/');
    }

    async addDeleteButton (initialCount) {
        var currentCount = 1;
        while(currentCount <= initialCount) {
            (await this.addAndRemoveElement).click();
            currentCount++;
            await browser.pause(2000);
        }
        return currentCount-1;
    }

    async removeDeleteButton (initialCount) {
        var currentCount = 1;
        while(currentCount <= initialCount) {
            (await this.deleteButton).click();
            currentCount++;
            await browser.pause(2000);
        }
        return currentCount-1;
    }
}

export default new AddAndRemoveElementsPage();