public class Main {

    public static void main(String[] args) {

       String anagramOne = "cowboy";
       String anagramTwo = "cboowpy";

       System.out.println(isAnagram(anagramOne, anagramTwo));
    }

    public static boolean isAnagram(String anagramOne, String anagramTwo) {
        char[] arrayOne = new char[26];
        char[] arrayTwo = new char[26];

        for (int i=0; i<anagramOne.length(); i++) {
            char c = anagramOne.charAt(i);
            arrayOne[c-97]++;
        }

        for (int j=0; j<anagramOne.length(); j++) {
            char c = anagramTwo.charAt(j);
            arrayTwo[c-97]++;
        }

        for (int k=0; k<26; k++) {
            if (arrayOne[k] != arrayTwo[k]) {
                return false;
            }
        }

        return true;
    }
}
