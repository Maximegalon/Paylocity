import { storiesOf, moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { centered } from '@storybook/addon-centered/angular';
import { withKnobs, text } from '@storybook/addon-knobs';
import { ButtonModule } from 'primeng/button';
import { EntryBarComponent } from './entry-bar.component';
// import * as readme from './entry-bar.readme.md';

const template = `
<div style="width: 100%;">
  <app-entry-bar [buttonLabel]="buttonLabel" [textPlaceholder]="textPlaceholder"></app-entry-bar>
</div>
`;

const stories = storiesOf('Common Controls/Entry bar', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
      ],
      declarations: [
        EntryBarComponent
      ],
      providers: []
    })
  )
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('Complete', () => ({
      component: EntryBarComponent,
      template: template,
      props: {
        buttonLabel: text('Click Me:', 'Click Me'),
        textPlaceholder: text('Input field placeholder:', 'Enter the item to create')},
    }),
    {
      notes: {
        // markdown: readme
      }
    }
  )
