// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9WqxVqG68BmDdoC5M3n3qB
// Component: knNE2Lb4pp2wc
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_copy_of_starter_blog_primary_copy.module.css"; // plasmic-import: 9WqxVqG68BmDdoC5M3n3qB/projectcss
import sty from "./PlasmicPostHeader.module.css"; // plasmic-import: knNE2Lb4pp2wc/css

export const PlasmicPostHeader__VariantProps = new Array();

export const PlasmicPostHeader__ArgProps = new Array(
  "postTitle",
  "date",
  "blogTitle"
);

function PlasmicPostHeader__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.PlasmicLink
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(projectcss.all, projectcss.a, sty.link)}
        component={Link}
        href={"/"}
        platform={"nextjs"}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Plasmic Starter Blog",
          value: args.blogTitle,
          className: classNames(sty.slotTargetBlogTitle)
        })}
      </p.PlasmicLink>

      {p.renderPlasmicSlot({
        defaultContents: "Hello world",
        value: args.postTitle,
        className: classNames(sty.slotTargetPostTitle)
      })}

      {p.renderPlasmicSlot({
        defaultContents: "January 1, 2020",
        value: args.date,
        className: classNames(sty.slotTargetDate)
      })}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "link"],
  link: ["link"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPostHeader__ArgProps,
      internalVariantPropNames: PlasmicPostHeader__VariantProps
    });

    return PlasmicPostHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPostHeader";
  } else {
    func.displayName = `PlasmicPostHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicPostHeader = Object.assign(
  // Top-level PlasmicPostHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    // Metadata about props expected for PlasmicPostHeader
    internalVariantProps: PlasmicPostHeader__VariantProps,
    internalArgProps: PlasmicPostHeader__ArgProps
  }
);

export default PlasmicPostHeader;
/* prettier-ignore-end */
