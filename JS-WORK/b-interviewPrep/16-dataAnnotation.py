def decode(message_file):
    # Read the contents of the message file
    with open(message_file, 'r') as file:
        lines = file.readlines()

    # Initialize an empty list to store the decoded words
    decoded_words = []

    # Generate words for the pyramid structure based on the numbers
    words = ["I", "love", "dogs", "cats", "you", "computers"]

    # Sort lines based on the first number
    lines.sort(key=lambda x: int(x.split()[0]))

    # Iterate over each line in the file
    for line in lines:
        # Get the word corresponding to the number
        word = words[int(line.strip()) - 1]

        # Add the word to the decoded words list
        decoded_words.append(word)

    # Join the decoded words into a single string
    decoded_message = ' '.join(decoded_words)

    return decoded_message

# Example usage:
decoded_message = decode('message.txt')
print(decoded_message)
