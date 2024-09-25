

import {expect} from 'chai'

import { Circle }  from  './index.js';

describe('Describe diameter of a circle', function(){
    it('Test1. circle Diameter', function(){
        let radius = new Circle(5);
        expect(radius.getDiameter()).to.equal(31);
    })
    it('Test2. Area of Circle', function () {
        let radius = new Circle(25);
        expect(radius.getArea()).to.equal(1963);
    })
})

