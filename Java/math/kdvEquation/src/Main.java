import org.knowm.xchart.XYChart;
import org.knowm.xchart.SwingWrapper;
import org.knowm.xchart.QuickChart;

public class Main {

    public static void main(String[] args) throws Exception {
        int min = -20;
        int max = 20;
        double h = 0.04;
        double[] xData = new double[(int) ((max-min)/h)];
        double[] yData = new double[(int) ((max-min)/h)];

        for (int i=0; i<xData.length; i++) {
            xData[i] = -20 + (h*i);
        }

        for (int j=0; j<yData.length-1; j++) {
            yData[j] = 6 * sech(xData[j]) * sech(xData[j]);
        }

        // Create Chart
        final XYChart chart = QuickChart.getChart("kDV Equation", "Wave height", "Time", "water", xData, yData);

        // Show it
        final SwingWrapper<XYChart> sw = new SwingWrapper<XYChart>(chart);
        sw.displayChart();

        while (true) {
            Thread.sleep(1);

            yData= updateArray(yData);

            //System.out.println(Arrays.toString(yData));
            chart.updateXYSeries("water", xData, yData, null);
            sw.repaintChart();
        }
    }

    private static double[] updateArray(double[] yData) {
        int nu=-1;
        int alpha = -3;
        double h = 0.04;
        double k = .0001;
        int lengthh = yData.length;

        for (int i = 0; i < lengthh; i++) {
            double ux = (Math.pow(getData(i+1, yData), 2) - (Math.pow(getData(i-1,yData),2))) / (2*h);
            double uxxx = (getData(i+2,yData) - (2*getData(i+1,yData)) + (2*getData(i-1,yData))
                    - getData(i-2,yData)) / (2*h*h*h);

            yData[i] += k * ((-alpha * ux) + (-nu * uxxx));
        }

        return yData;
    }

    private static double getData(int index, double[] yData) {
        if (index >= 0 && index <= yData.length-1) {
            return yData[index];
        } else if (index <0){
            return yData[yData.length-1 + index];
        } else if (index > yData.length-1) {
            return yData[index-(yData.length-1)];
        } else {
            return 0;
        }
    }

    private static double sech(double x) {
        return 1/cosh(x);
    }

    private static double cosh(double x) {
        return (Math.exp(x)+Math.exp(-x))/2.0;
    }
}
