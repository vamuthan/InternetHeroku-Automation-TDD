import { $$ } from '@wdio/globals'
import Page from './page.js';
import axios from 'axios';
import { expect } from 'chai';


class BrokenImages extends Page {

    get imagesContainer (){
        return $$('div[class="example"] > img');
    }

    async getImageStatus(){
        for (let i = 0 ; i < await this.imagesContainer.length ; i++) {
            const imageSrc = await this.imagesContainer[i].getAttribute('src')
            const link = 'https://the-internet.herokuapp.com/'+imageSrc;
            try{
                expect(await axios.get(link).status).to.equals(200);
                console.log(expect(await axios.get(link).status).to.equals(200))
            }
            catch(error) {
                console.log(error.message)
            } 
        }
    }

    open (){
        return super.open('broken_images')
    }

}

export default new BrokenImages();