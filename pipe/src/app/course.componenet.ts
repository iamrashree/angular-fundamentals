import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        {{ text | summary:10 }}
    `
})
export class CourseComponent {
    text = `jsdjsdjfshfds fshvfhsgfs fshdfgsdyfgjsdgfjshdf sdhfvsdhfvjhdsf s hfdvsdhfvjhsfjsdf sndfvhsdvfyjsdvfsf sdhfvhsfvhdsvfhsdf shfjhsdfhgsfs f shfvhsvfjhdsf fhsvfhgsvfyjsf dhfhsfsfvsf
    `;
}
