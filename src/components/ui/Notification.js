import { Notification, Icon, Text } from "atomize";

const MyNotifation = ({ successDark, setSuccessDark, children }) => {

    return (
        <Notification
          bg="success700"
          isOpen={successDark}
          onClose={() => setSuccessDark(false)}
          prefix={
            <Icon
              name="Success"
              color="white"
              size="18px"
              m={{ r: "0.5rem" }}
            />
          }
        >
          <Text textColor='white'>{ children }</Text>
        </Notification>
    );
}

export default MyNotifation;