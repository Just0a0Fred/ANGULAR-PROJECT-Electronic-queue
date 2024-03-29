import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HeaderVisibilityService {

    public isVisible!: boolean;
    public isButtonsVisible: boolean = true;

    constructor() { this.isVisible = true; }

    public show():boolean {
        return this.isVisible = true;
    }

    public hide():boolean {
        return this.isVisible = false;
    }
}
