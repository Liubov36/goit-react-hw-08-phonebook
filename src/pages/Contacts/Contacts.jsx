import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from '../../components/ContactsList/ContactsList';
import { ContactEditor } from '../../components/ContactEditor/ContactEditor';
import { Filter } from '../../components/Filter/Filter';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectIsLoading } from '../../redux/contacts/selectors';
import {
  BoxContacts,
  MainContainer,
  Container,
  Wrapper,
  WrapperFilter,
} from './Contacts.styled';
// import { Spinner } from 'components/Spinner/Spinner';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
//   const items = useSelector(selectItems);
//   const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <MainContainer>
        <Container>
          <BoxContacts>
            <Wrapper>
              <ContactEditor />
              {/* {items.length > 0 && (
             <>
               <h2>Contacts</h2>
              <Filter />
             </>
                )} */}
              <div>{isLoading && 'Request in progress...'}</div>
              {/* <div>{isLoading && !error && <Spinner />}</div> */}
              <ContactList />
            </Wrapper>
            <WrapperFilter>
              <Filter />
            </WrapperFilter>
          </BoxContacts>
          {/* {error && <p> {error} </p>} */}
        </Container>
      </MainContainer>
    </>
  );
}