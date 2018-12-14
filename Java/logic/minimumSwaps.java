public class Main {

    public static void main(String[] args) {
        int[] array = new int[] {7,1,3,2,4,5,6};
       System.out.println(minimumSwaps(array));
    }

    public static int minimumSwaps(int[] array) {
        int swap=0;
        boolean visited[] = new boolean[array.length];

        for(int i=0;i<array.length;i++){
            int j=i;
            int cycle=0;

            while(!visited[j]){
                visited[j]=true;
                j=array[j]-1;
                cycle++;
            }

            if(cycle!=0)
                swap+=cycle-1;
        }
        return swap;
    }
}
