import java.util.Date;

public class AlfredQuotes {
    
    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }
    
    public String guestGreeting(String name) {
        // YOUR CODE HERE
        String greetings = String.format("Hello, %s.Lovelly to see you", name);
        return greetings;
    }
    
    public String dateAnnouncement() {
        // YOUR CODE HERE
        Date date = new Date();
        return "It is currently " + date;
    }
    
    public String respondBeforeAlexis(String conversation) {
        // YOUR CODE HERE

        if(conversation.indexOf("Alexis") > -1){
            return "She isn't sophisticated enough for that";
        }
        if(conversation.indexOf("Alfred") > -1){
            return "At your service. As you wish, naturally";
        }
        else{
            return "Right, and with that I shall retire.";
        }

    }
    
	// NINJA BONUS
	// See the specs to overload the guessGreeting method
    // SENSEI BONUS

    public String Yell(String word) {
        // YOUR CODE HERE
        return String.format("I said, that's %s ", word.toUpperCase());
    }
    // Write your own AlfredQuote method using any of the String methods you have learned!
}
