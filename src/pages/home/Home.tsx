import XNode from "@web-atoms/core/dist/core/XNode";
import { ContentPage } from "@web-atoms/web-controls/dist/mobile-app/MobileApp";
import AtomChips, { Chip, Suggestion } from "@web-atoms/web-controls/dist/basic/AtomChips";
import categories, { ICategory } from "../../model/categories";

export default class HomePage extends ContentPage {

    public selected: ICategory[] = [];

    public async init() {

        this.title = "Chips Sample";


        this.renderer = <div>
            <AtomChips
                items={this.selected}
                suggestions={categories()}
                itemRenderer={(item) => <Chip
                    label={item.label}
                    icon={item.icon}
                    />}
                suggestionRenderer={(item) => <Suggestion
                    icon={item.icon}
                    label={item.label}
                    />}
                /> 
        </div>;
    }

}
