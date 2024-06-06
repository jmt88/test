<?php

/**
 * Pie Theme class
 */
class PieTheme extends Theme
{
    protected $font_color = '#000000';
    protected $background_color = '#FFFFFF';
    protected $axis_color = '#FFFFFF';
    protected $grid_color = '#FFFFFF';

    function GetColorList()
    {
        return array(
            "#23B9D5",
            "#ED5C49",
            "#F9A914",
            "#8DC63F",
            "#0C3759"
        );
    }

    function SetupGraph($graph)
    {

        // graph
        /*
        $img = $graph->img;
        $height = $img->height;
        $graph->SetMargin($img->left_margin, $img->right_margin, $img->top_margin, $height * 0.25);
        */
        $graph->SetFrame(false);

        // legend
        $graph->legend->SetFrameWeight(0);
        //$graph->legend->Pos(0.5, 0.85, 'center', 'top');
        $graph->legend->SetFillColor('white');
        //$graph->legend->SetLayout(LEGEND_HOR);
        //$graph->legend->SetColumns(3);
        $graph->legend->SetShadow(false);
        //$graph->legend->SetMarkAbsSize(5);
    }


    function SetupPieGraph($graph)
    {

        // graph
        $graph->SetFrame(false);

        // legend
        $graph->legend->SetFillColor('white');

        $graph->legend->SetFrameWeight(0);
        //$graph->legend->Pos(0.5, 0.80, 'center', 'top');
        //$graph->legend->SetLayout(LEGEND_HOR);
        //$graph->legend->SetColumns(4);

        $graph->legend->SetShadow(false);
        //$graph->legend->SetMarkAbsSize(5);

        //$graph->SetAntiAliasing();
    }


    function PreStrokeApply($graph)
    {
        if ($graph->legend->HasItems()) {
            $img = $graph->img;
            $graph->SetMargin(
                $img->raw_left_margin,
                $img->raw_right_margin,
                $img->raw_top_margin,
                is_numeric($img->raw_bottom_margin) ? $img->raw_bottom_margin : $img->height * 0.25
            );
        }
    }

    function ApplyPlot($plot)
    {

        switch (get_class($plot)) {
            case 'GroupBarPlot':
                {
                    foreach ($plot->plots as $_plot) {
                        $this->ApplyPlot($_plot);
                    }
                    break;
                }

            case 'AccBarPlot':
                {
                    foreach ($plot->plots as $_plot) {
                        $this->ApplyPlot($_plot);
                    }
                    break;
                }

            case 'BarPlot':
                {
                    $plot->Clear();

                    $color = $this->GetNextColor();
                    $plot->SetColor($color);
                    $plot->SetFillColor($color);
                    //$plot->SetShadow();
                    break;
                }

            case 'LinePlot':
                {
                    $plot->Clear();
                    $plot->SetColor($this->GetNextColor());
                    $plot->SetWeight(2);
//                $plot->SetBarCenter();
                    break;
                }

            case 'PiePlot':
                {
                    $plot->SetCenter(0.5, 0.45);
                    $plot->ShowBorder(false);
                    $plot->SetSliceColors($this->GetThemeColors());
                    break;
                }

            case 'PiePlot3D':
                {
                    $plot->SetSliceColors($this->GetThemeColors());
                    break;
                }

            default:
                {
                }
        }
    }
}


?>
