import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) {
      return null;
    }

    const words = value.split(' ');
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (i > 0 && this.isPreposition(word)) {
        words[i] = words[i].toLowerCase();
      } else {
        words[i] = this.toTitleCase(word);
      }
    }
    return words.join(' ');
  }

  private toTitleCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

  private isPreposition(word: string): boolean {
    const preposition = [
      'of',
      'the'
    ];
    return preposition.includes(word.toLowerCase());
  }

}
