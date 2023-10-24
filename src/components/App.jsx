import Form  from './Form/Form'
import { Section } from './Section/Section';
import { Contact } from './Contact/Contact';
import { Filter } from './Filter/Filter';

export default function App() {
         return (
      <>
        <Section title='Phonebook'>
        <Form />
    </Section>
    <Section title='Contacts'>
    <Filter />
    
    <Contact/>
    </Section>
    </>
    
    )
}







